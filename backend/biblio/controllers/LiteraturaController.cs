using biblio.dados;
using biblio.modelos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace biblio.controllers
{
    [ApiController]
    [Route("api/literaturas")]
    public class LiteraturaController : Controller
    {
        //--- para debugar apenas
        TextWriter console = Console.Out;

        private readonly BiblioDbContext biblioDbContext;
        public LiteraturaController(BiblioDbContext biblioDbContext)
        {
            this.biblioDbContext = biblioDbContext;
        }

        //-----------------------------------------------------------------------------

        [HttpGet]
        public async Task<IActionResult> GetAllLiteraturas()
        {
            var literaturas = await this.biblioDbContext.Literaturas.OrderBy(p => p.Nome).ToListAsync();

            return Ok(literaturas);
        }

        //-----------------------------------------------------------------------------

        [HttpPost]
        public async Task<IActionResult> incluirLiteratura([FromBody] Literatura literaturaRequest)
        {
            literaturaRequest.Id = Guid.NewGuid();
            await this.biblioDbContext.AddAsync<Literatura>(literaturaRequest);  
            await this.biblioDbContext.SaveChangesAsync();

            return Ok(literaturaRequest);

        }

        //-----------------------------------------------------------------------------

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetLiteratura([FromRoute] Guid id)
        {
            var literatura = await this.biblioDbContext.Literaturas.FirstOrDefaultAsync(l => l.Id == id);
            if(literatura == null)
            {
                return NotFound();
            }

            return Ok(literatura);
        }

        //-----------------------------------------------------------------------------

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> alterarLiteratura([FromRoute] Guid id, Literatura literaturaRequest)
        {
            var literaturaOriginal = await this.biblioDbContext.Literaturas.FindAsync(id);
            if(literaturaOriginal == null)
            {
                return NotFound();
            }

            literaturaOriginal.Nome = literaturaRequest.Nome;

            await this.biblioDbContext.SaveChangesAsync();

            return Ok(literaturaRequest);
        }

        //-----------------------------------------------------------------------------

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> excluirLiteratura([FromRoute] Guid id)
        {
            var literaturaOriginal = await this.biblioDbContext.Literaturas.FindAsync(id);
            
            if (literaturaOriginal == null)
            {
                return NotFound();
            }

            this.biblioDbContext.Remove(literaturaOriginal);
            await this.biblioDbContext.SaveChangesAsync();

            return Ok(literaturaOriginal);
        }
    }
}
