using MediatR;
using OpenCase.EFcore;
using OpenCase.Entities;
using OpenCase.Event;
using OpenCase.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace OpenCase.Handlers
{
    public class CreateCaseHandler : IRequestHandler<CreateCase, int>
    {
        private readonly OpenCaseContext _openCaseContext;
        private readonly IMediator _mediator;

        public CreateCaseHandler(OpenCaseContext openCaseContext, IMediator mediator)
        {
            _openCaseContext = openCaseContext;
            _mediator = mediator;
        }


        public Task<int> Handle(CreateCase message, CancellationToken cancellationToken)
        {

            _openCaseContext.Case.Add(message.Case);
            _openCaseContext.SaveChanges();

            return Task.FromResult<int>(message.Case.caseId);
        }
    }
}
