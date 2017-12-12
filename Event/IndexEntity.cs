using MediatR;
using OpenCase.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpenCase.Event
{
    public class IndexEntity: IRequest<List<EntityCase>>
    {
        public int? ID { get; set; } = null;
    }
}
