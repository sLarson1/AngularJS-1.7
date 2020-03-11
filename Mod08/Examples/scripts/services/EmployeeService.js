empApp.service('EmployeeService', function(){
    this.getEmployees = function(){
        return [
            { name: 'Devan', title: 'Logistics Manager', phone: '800-243-9392', city: 'Boston', hireDate: '2014-09-02', salary: 56900 },
            { name: 'Nathan', title: 'HR Director', phone: '800-555-2711', city: 'Seattle', hireDate: '2012-07-27', salary: 61350 },
            { name: 'Ann', title: 'CEO', phone: '800-555-2720', city: 'Denver', hireDate: '2003-10-18', salary: 127700 },
            { name: 'Grace', title: 'Sales Manager', phone: '800-555-8289', city: 'Houston', hireDate: '2009-07-19', salary: 68400 }
        ];
    }
});
