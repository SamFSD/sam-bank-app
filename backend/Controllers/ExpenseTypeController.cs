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
    public class ExpenseTypeController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ExpenseTypeController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/ExpenseType
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExpenseType>>> GetExpenseTypes()
        {
            if (_context.ExpenseTypes == null)
            {
                return NotFound();
            }
            return await _context.ExpenseTypes.ToListAsync();
        }

        // GET: api/ExpenseType/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExpenseType>> GetExpenseType(Guid id)
        {
            if (_context.ExpenseTypes == null)
            {
                return NotFound();
            }
            var expenseType = await _context.ExpenseTypes.FindAsync(id);

            if (expenseType == null)
            {
                return NotFound();
            }

            return expenseType;
        }

        // PUT: api/ExpenseType/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExpenseType(Guid id, ExpenseType expenseType)
        {
            if (id != expenseType.Id)
            {
                return BadRequest();
            }

            _context.Entry(expenseType).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExpenseTypeExists(id))
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

        // POST: api/ExpenseType
        [HttpPost]
        public async Task<ActionResult<ExpenseType>> PostExpenseType(ExpenseType expenseType)
        {
            if (_context.ExpenseTypes == null)
            {
                return Problem("Entity set 'ApplicationDbContext.ExpenseTypes' is null.");
            }
            _context.ExpenseTypes.Add(expenseType);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExpenseType", new { id = expenseType.Id }, expenseType);
        }

        // DELETE: api/ExpenseType/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExpenseType(Guid id)
        {
            if (_context.ExpenseTypes == null)
            {
                return NotFound();
            }
            var expenseType = await _context.ExpenseTypes.FindAsync(id);
            if (expenseType == null)
            {
                return NotFound();
            }

            _context.ExpenseTypes.Remove(expenseType);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExpenseTypeExists(Guid id)
        {
            return (_context.ExpenseTypes?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
