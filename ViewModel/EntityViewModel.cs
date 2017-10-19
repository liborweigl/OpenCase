﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OpenCase.ViewModel
{
    public class EntityViewModel
    {
        [Required]
        public string email { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string surname { get; set; }
    }
}
