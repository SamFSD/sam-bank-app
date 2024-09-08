using System;

namespace backend.Models
{
    public class ExpenseType
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public decimal Amount { get; set; }
        public decimal Percentage { get; set; }
    }
}
