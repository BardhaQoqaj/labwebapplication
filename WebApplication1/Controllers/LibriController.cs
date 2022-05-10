using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using WebApplication1.Models;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LibriController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public LibriController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select Libri_ID, Titulli,Faqet,Disponueshmeria,Viti,PershkrimiLibrit,photolibri,EmriKategorise
                            from
                            Libri
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BooksAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    SqlDataReader sqlDataReader = myCommand.ExecuteReader();
                    myReader = sqlDataReader;
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Libri lib)
        {
            string query = @"
                           insert into Libri
                           (Titulli,Viti,PershkrimiLibrit,photolibri,Faqet,Disponueshmeria,EmriKategorise)
                    values (@Titulli,@Viti,@PershkrimiLibrit,@photolibri,@Faqet,@Disponueshmeria,@EmriKategorise)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BooksAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Titulli", lib.Titulli);
                    myCommand.Parameters.AddWithValue("@Viti", lib.Viti);
                    myCommand.Parameters.AddWithValue("@PershkrimiLibrit", lib.PershkrimiLibrit);
                    myCommand.Parameters.AddWithValue("@photolibri", lib.photolibri);
                    myCommand.Parameters.AddWithValue("@Faqet", lib.Faqet);
                    myCommand.Parameters.AddWithValue("@Disponueshmeria", lib.Disponueshmeria);
                    myCommand.Parameters.AddWithValue("@EmriKategorise", lib.EmriKategorise);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }


        [HttpPut]
        public JsonResult Put(Libri lib)
        {
            string query = @"
                           update Libri
                           set Titulli= @Titulli,
                            Viti=@Viti,
                            PershkrimiLibrit=@PershkrimiLibrit,
                            photolibri=@photolibri,
                            Faqet=@Faqet,
                            Disponueshmeria=@Disponueshmeria,
                            EmriKategorise=@EmriKategorise
                            where Libri_ID=@Libri_ID
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BooksAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Libri_ID", lib.Libri_ID);
                    myCommand.Parameters.AddWithValue("@Titulli", lib.Titulli);
                    myCommand.Parameters.AddWithValue("@Viti", lib.Viti);
                    myCommand.Parameters.AddWithValue("@PershkrimiLibrit", lib.PershkrimiLibrit);
                    myCommand.Parameters.AddWithValue("@photolibri", lib.photolibri);
                    myCommand.Parameters.AddWithValue("@Faqet", lib.Faqet);
                    myCommand.Parameters.AddWithValue("@Disponueshmeria", lib.Disponueshmeria);
                    myCommand.Parameters.AddWithValue("@EmriKategorise", lib.EmriKategorise);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Updated Successfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                           delete from Libri
                            where Libri_ID=@Libri_ID
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("BooksAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Libri_ID", id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Deleted Successfully");
        }
        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postedFile = httpRequest.Files[0];
                string filename = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/NewFolder1/" + filename;

                using (var stream = new FileStream(physicalPath, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }

                return new JsonResult(filename);
            }
            catch (Exception)
            {


                return new JsonResult("anonymous.png");
            }

        }
    }
}


