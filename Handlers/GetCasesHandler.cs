using MediatR;
using OpenCase.EFcore;
using OpenCase.Entities;
using OpenCase.Event;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OpenCase.Handlers
{
    public class GetCasesHandler :  IRequestHandler<GetCase,IList<Case>>
    {
        private readonly OpenCaseContext _openCaseContext;
        private readonly IMediator _mediator;

        public GetCasesHandler(OpenCaseContext openCaseContext, IMediator mediator)
        {
            _openCaseContext = openCaseContext;
            _mediator = mediator;
        }


        public Task<IList<Case>> Handle(GetCase request, CancellationToken cancellationToken)
        {
            return  Task.FromResult<IList<Case>>( _openCaseContext.Case.ToList<Case>());
        }
    }
}
