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
    public class CreateEntityHandler : IRequestHandler<CreateEntity, int>
    {
        private readonly OpenCaseContext _openCaseContext;
        private readonly IMediator _mediator;

        public CreateEntityHandler(OpenCaseContext openCaseContext, IMediator mediator)
        {
            _openCaseContext = openCaseContext;
            _mediator = mediator;
        }

        public Task<int> Handle(CreateEntity message, CancellationToken cancellationToken)
        {
            var entity  = new EntityCase
            {
                email = message.email,
                surname = message.surname,
                name = message.name
              
            };
            _openCaseContext.EntityCase.Add(entity);
            _openCaseContext.SaveChanges();


            return Task.FromResult<int>(entity.Id);
        }
    }
}
