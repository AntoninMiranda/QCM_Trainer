var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

builder.Services.AddControllers();

var app = builder.Build();

// app.UseHttpsRedirection();

app.UseCors("AllowAll");
// app.Urls.Add("http://0.0.0.0:8080");
app.Urls.Add("http://0.0.0.0:8081");
app.Urls.Add("http://localhost:8081");

app.UseAuthorization();

app.MapControllers();

app.Run();