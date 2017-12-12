using MediatR;
using OpenCase.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpenCase.Event
{
    public class CreateEntity : IEntity, IRequest<int>
    {
        public string email { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
    }
}
