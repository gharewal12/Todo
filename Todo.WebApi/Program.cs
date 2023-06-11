using MongoDB.Driver;
using Todo.WebApi.Data;
using Todo.WebApi.GraphQL;
using Todo.WebApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IMongoClient>(serviceProvider => {
    var configuration = serviceProvider.GetRequiredService<IConfiguration>();
    var connectionString = configuration.GetConnectionString("MongoDB");
    return new MongoClient(connectionString);
});
builder.Services.AddScoped<TodoDbContext>();

// Configure HotChocolate GraphQL server
builder.Services
    .AddGraphQLServer()
    .AddMongoDbFiltering()
    .AddMongoDbSorting()
    .AddMongoDbProjections()
    .AddQueryType<Query>()
    .AddMutationType<Mutation>()
    .AddType<TodoItem>()
    .AddFiltering()
    .AddSorting();

builder.Services.AddCors(options => {
    options.AddDefaultPolicy(builder => {
        builder.WithOrigins("http://localhost:3000")
               .AllowAnyOrigin()
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.UseHttpsRedirection();
app.UseRouting()
    .UseEndpoints(e => {
        e.MapGraphQL();
    });

app.Run();