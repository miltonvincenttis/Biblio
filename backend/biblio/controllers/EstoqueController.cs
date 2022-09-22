using biblio.modelos;
using System;
using Microsoft.AspNetCore.Mvc;
using biblio.dados;

namespace biblio.controllers
{
    [ApiController]
    [Route("api/estoque/")]
    public class EstoqueController : Controller
    {
        //--- para debugar apenas
        TextWriter console = Console.Out;

        private readonly BiblioDbContext biblioDbContext;
        
        //-----------------------------------------------------------------------------

        public EstoqueController(BiblioDbContext biblioDbContext)
        {
            this.biblioDbContext = biblioDbContext;
        }


        //-----------------------------------------------------------------------------

        [HttpPut]
        [Route("entrada/{id:Guid}")]
        public async Task<IActionResult> entradaLiteratura([FromRoute] Guid id, Estoque estoqueRequest)
        {

            //console.Write("estoqueRequest: " + estoqueRequest);


            var literatura = await this.biblioDbContext.Literaturas.FindAsync(id);

            //console.Write("estoqueRequest: " + estoqueRequest);

            if (literatura == null)
            {
                return NotFound();
            }

            literatura.Disponivel += estoqueRequest.Quantidade;

            await this.biblioDbContext.SaveChangesAsync();

            return Ok(literatura);
        }

        //-----------------------------------------------------------------------------

        [HttpPut]
        [Route("saida/{id:Guid}")]
        public async Task<IActionResult> saidaLiteratura([FromRoute] Guid id, Estoque estoqueRequest)
        {

            //console.Write("estoqueRequest: " + estoqueRequest);

            var literatura = await this.biblioDbContext.Literaturas.FindAsync(id);

            //console.Write("estoqueRequest: " + estoqueRequest);

            if (literatura == null)
            {
                return NotFound();
            }

            literatura.Disponivel -= estoqueRequest.Quantidade;

            await this.biblioDbContext.SaveChangesAsync();

            return Ok(literatura);
        }
    }
}
