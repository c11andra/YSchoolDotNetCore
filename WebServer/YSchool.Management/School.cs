using System;
using YSchool.Management.Interfaces;

namespace YSchool.Management
{
    public class School: ISchool
    {
        public School()
        {
            this.Name = "YSchool";
            this.About = "School Portal to manage students";
        }
        public string Name { get; set; }
        public string About { get; set; }
    }
}
