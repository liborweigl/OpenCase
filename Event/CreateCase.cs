using MediatR;
using OpenCase.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpenCase.Event
{
    public class CreateCase : IRequest<int>
    {
        public Case @Case { get; set;}

    }
}
