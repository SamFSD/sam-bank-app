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
    public class SpendingTypeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SpendingTypeController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/SpendingType
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SpendingType>>> GetSpendingTypes()
        {
          if (_context.SpendingTypes == null)
          {
              return NotFound();
          }
            return await _context.SpendingTypes.ToListAsync();
        }

        // GET: api/SpendingType/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SpendingType>> GetSpendingType(int id)
        {
          if (_context.SpendingTypes == null)
          {
              return NotFound();
          }
            var spendingType = await _context.SpendingTypes.FindAsync(id);

            if (spendingType == null)
            {
                return NotFound();
            }

            return spendingType;
        }

        // PUT: api/SpendingType/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSpendingType(int id, SpendingType spendingType)
        {
            if (id != spendingType.Id)
            {
                return BadRequest();
            }

            _context.Entry(spendingType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SpendingTypeExists(id))
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

        // POST: api/SpendingType
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SpendingType>> PostSpendingType(SpendingType spendingType)
        {
          if (_context.SpendingTypes == null)
          {
              return Problem("Entity set 'ApplicationDbContext.SpendingTypes'  is null.");
          }
            _context.SpendingTypes.Add(spendingType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSpendingType", new { id = spendingType.Id }, spendingType);
        }

        // DELETE: api/SpendingType/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSpendingType(int id)
        {
            if (_context.SpendingTypes == null)
            {
                return NotFound();
            }
            var spendingType = await _context.SpendingTypes.FindAsync(id);
            if (spendingType == null)
            {
                return NotFound();
            }

            _context.SpendingTypes.Remove(spendingType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SpendingTypeExists(int id)
        {
            return (_context.SpendingTypes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
