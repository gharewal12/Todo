using MongoDB.Driver;
using Todo.WebApi.Models;

namespace Todo.WebApi.Data
{
    public class TodoDbContext
    {
        public TodoDbContext(IMongoClient mongoClient)
        {
            var database = mongoClient.GetDatabase("TodoDb");
            TodoItems = database.GetCollection<TodoItem>("TodoItems");
        }

        public IMongoCollection<TodoItem> TodoItems { get; }
    }
}
