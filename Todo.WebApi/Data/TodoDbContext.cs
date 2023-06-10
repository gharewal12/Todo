using MongoDB.Driver;
using Todo.WebApi.Models;

namespace Todo.WebApi.Data
{
    public class TodoDbContext
    {
        private readonly IMongoCollection<TodoItem>? _todoCollection;

        public TodoDbContext(IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase("TodoDb");
            _todoCollection = database.GetCollection<TodoItem>("TodoItems");
        }

        public IMongoCollection<TodoItem> TodoItems => _todoCollection;
    }
}
