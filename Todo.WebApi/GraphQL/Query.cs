using MongoDB.Driver;
using Todo.WebApi.Data;
using Todo.WebApi.Models;

namespace Todo.WebApi.GraphQL
{
    public class Query
    {
        /// <summary>
        /// To Get TodoItems Collection
        /// </summary>
        /// <param name="dbContext"></param>
        /// <returns></returns>
        public IEnumerable<TodoItem> GetTodoItems([Service] TodoDbContext dbContext)
        {
            return dbContext.TodoItems.Find(Builders<TodoItem>.Filter.Empty).ToEnumerable().AsEnumerable();
        }
    }
}
