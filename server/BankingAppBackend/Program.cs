using BankingAppBackend.Data;
using Microsoft.EntityFrameworkCore;
using Npgsql;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(options =>
{
    options.ListenLocalhost(8000); // HTTP
    options.ListenLocalhost(8001, listenOptions =>
    {
        listenOptions.UseHttps(); // HTTPS
    });
}
);

// Configure PostgreSQL
builder.Services.AddDbContext<BankingContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection"))); 

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.UseHttpsRedirection(); // Ensure this is included
}

app.UseHttpsRedirection(); // Optional, ensure HTTPS configuration is in place
app.UseStaticFiles(); // Optional, if you serve static files
app.UseRouting();
app.UseAuthorization();

app.MapControllers();

app.Run();