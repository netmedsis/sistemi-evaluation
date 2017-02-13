﻿using SistemiEvaluation.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SistemiEvaluation.Entities
{
    public class Content: IEntityBase
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Description { get; set; }

    
        public string Image { get; set; }

    }
}