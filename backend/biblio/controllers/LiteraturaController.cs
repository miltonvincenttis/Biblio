using biblio.dados;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace biblio.controllers
{
    [ApiController]
    [Route("api/literaturas")]
    public class LiteraturaController : Controller
    {
        private readonly BiblioDbContext biblioDbContext;
        public LiteraturaController(BiblioDbContext biblioDbContext)
        {
            this.biblioDbContext = biblioDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllLiteraturas()
        {
            var literaturas = await this.biblioDbContext.Literaturas.ToListAsync();

            return Ok(literaturas);
        }
    }
}
