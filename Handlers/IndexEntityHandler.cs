using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;
using OpenCase.EFcore;
using OpenCase.ViewModel;
using OpenCase.Event;
using OpenCase.Entities;

namespace OpenCase.Handlers
{
        public class ListEntityHandler : RequestHandler<IndexEntity, List<EntityCase>>
        {
            private readonly OpenCaseContext _db;

            public ListEntityHandler(OpenCaseContext openCaseContext, IMediator mediator)
            {
                _db = openCaseContext;
            }

        protected override List<EntityCase> HandleCore(IndexEntity message)
        {
            var department = _db.EntityCase
                .Where(d => (message.ID == null) || d.Id == message.ID).ToList<EntityCase>();

                return department;
            }
        }
   
}
