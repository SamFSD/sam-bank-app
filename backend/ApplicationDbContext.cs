using Microsoft.EntityFrameworkCore;
using backend.Models;
public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<ExpenseType> ExpenseTypes { get; set; }
    public DbSet<IncomeType> IncomeTypes { get; set; }
    public DbSet<SpendingType> SpendingTypes { get; set; }
}
