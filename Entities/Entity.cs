using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpenCase.Entities
{
    public class EntityCase : IEntity
    {
        //public int productId { get; set; }
       public int Id { get; set; }
       public string email { get; set; }
       public string name { get; set; }
       public string surname { get; set; }
       //public string uniqueId { get; set; }
       //public int type { get; set; }
       //public int starRating { get; set; }
       //public string imageUrl { get; set; }
       //public IAddress address { get; set; }

    }

    public interface IEntity
    {
        //int productId { get; set; }
        string email { get; set; }
        string name { get; set; }
        string surname { get; set; }
        //string uniqueId { get; set; }
        //int type { get; set; }
        //int starRating { get; set; }
        //string imageUrl { get; set; }
        //IAddress address { get; set; }
    }

    public interface IAddress
    {
        string adddress { get; set; }
        string adddress2 { get; set; }
        string city { get; set; }
        string country { get; set; }
        string postalCode { get; set; }
    }

}
