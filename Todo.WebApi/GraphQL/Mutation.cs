using Todo.WebApi.Data;
using Todo.WebApi.Models;

namespace Todo.WebApi.GraphQL
{
    public class Mutation
    {
        /// <summary>
        /// Add new todo item
        /// </summary>
        /// <param name="dbContext"></param>
        /// <param name="item"></param>
        /// <returns></returns>
        public bool CreateTodo([Service] TodoDbContext dbContext, TodoItem item)
        {
            dbContext.TodoItems.InsertOne(item);

            return true;
        }
    }
}
