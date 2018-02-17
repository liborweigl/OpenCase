using MediatR;
using OpenCase.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OpenCase.Event
{
    public class GetCase :  IRequest<IList<Case>>
    {
        
    }
}
