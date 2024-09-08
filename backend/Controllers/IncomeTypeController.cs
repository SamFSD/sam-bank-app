using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IncomeTypeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public IncomeTypeController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/IncomeType
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IncomeType>>> GetIncomeTypes()
        {
          if (_context.IncomeTypes == null)
          {
              return NotFound();
          }
            return await _context.IncomeTypes.ToListAsync();
        }

        // GET: api/IncomeType/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IncomeType>> GetIncomeType(int id)
        {
          if (_context.IncomeTypes == null)
          {
              return NotFound();
          }
            var incomeType = await _context.IncomeTypes.FindAsync(id);

            if (incomeType == null)
            {
                return NotFound();
            }

            return incomeType;
        }

        // PUT: api/IncomeType/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutIncomeType(int id, IncomeType incomeType)
        {
            if (id != incomeType.Id)
            {
                return BadRequest();
            }

            _context.Entry(incomeType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!IncomeTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/IncomeType
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<IncomeType>> PostIncomeType(IncomeType incomeType)
        {
          if (_context.IncomeTypes == null)
          {
              return Problem("Entity set 'ApplicationDbContext.IncomeTypes'  is null.");
          }
            _context.IncomeTypes.Add(incomeType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetIncomeType", new { id = incomeType.Id }, incomeType);
        }

        // DELETE: api/IncomeType/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIncomeType(int id)
        {
            if (_context.IncomeTypes == null)
            {
                return NotFound();
            }
            var incomeType = await _context.IncomeTypes.FindAsync(id);
            if (incomeType == null)
            {
                return NotFound();
            }

            _context.IncomeTypes.Remove(incomeType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool IncomeTypeExists(int id)
        {
            return (_context.IncomeTypes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
