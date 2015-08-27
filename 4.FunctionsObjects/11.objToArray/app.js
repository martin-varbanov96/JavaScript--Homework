function Person(firstName, secondName, age){

    this.firstName = firstName;
    this.secondName = secondName;
    this.age = age;
}


var people = [];
people.push(new Person("Scott", "Guthrie", 38));
people.push(new Person("Scott", "Johns", 36));
people.push(new Person("Scott", "Hanselman", 39));
people.push(new Person("Jesse", "Liberty", 57));
people.push(new Person("Jon", "Skeet", 38));