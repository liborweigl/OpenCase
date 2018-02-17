using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using OpenCase.EFcore;
using Microsoft.EntityFrameworkCore;
using MediatR;
using System.Reflection;
using OpenCase.Middleware;
using Microsoft.AspNetCore.Mvc.Formatters;
using Newtonsoft.Json.Serialization;

namespace OpenCase
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(setupAction=> {
                var jsonInputFormatter = setupAction.InputFormatters
           .OfType<JsonInputFormatter>().FirstOrDefault();

                if (jsonInputFormatter != null)
                {
                    jsonInputFormatter.SupportedMediaTypes
                    .Add("application/vnd.marvin.author.full+json");
                    jsonInputFormatter.SupportedMediaTypes
                    .Add("application/vnd.marvin.authorwithdateofdeath.full+json");
                }

                var jsonOutputFormatter = setupAction.OutputFormatters
                    .OfType<JsonOutputFormatter>().FirstOrDefault();

                if (jsonOutputFormatter != null)
                {
                    jsonOutputFormatter.SupportedMediaTypes.Add("application/vnd.marvin.hateoas+json");
                }
                 }).AddJsonOptions(options =>
                    {
                        options.SerializerSettings.ContractResolver =
                        new CamelCasePropertyNamesContractResolver();
                    }); 
            
            services.AddMediatR(typeof(Startup).GetTypeInfo().Assembly);
            services.AddDbContext<OpenCaseContext>(options => options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });

                app.UseRequestResponseLogging();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(
                routes =>
            {
                routes.MapRoute(
                   name: "api",
                   template: "api/{controller}/{action}/{id?}");

                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            }
        );
        }
    }
}
