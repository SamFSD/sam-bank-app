using Microsoft.EntityFrameworkCore;
using BankingAppBackend.Models;

namespace BankingAppBackend.Data
{
    public class BankingContext : DbContext
    {
        public BankingContext(DbContextOptions<BankingContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
    }
}
