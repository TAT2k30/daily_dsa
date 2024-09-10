export namespace Models {
    interface HasName { 
        Name: string;
    }

    export type User_Type = HasName & {
        Age: number;
        Salary: number;
        Description: string;
    };

    // Define the User class implementing the User_Type interface
    export class User implements HasName {
        private name: string;
        private age: number;
        private salary: number;
        private description: string;
        public Name: string;
        constructor(user: User_Type) {
            this.name = user.Name;
            this.age = user.Age;
            this.salary = user.Salary;
            this.description = user.Description;
            this.Name = user.Name;
        }



        // Getter and Setter for Name
        public getName(): string {
            return this.name;
        }

        public setName(name: string): void {
            this.name = name;
        }

        public getAge(): number {
            return this.age;
        }

        public setAge(age: number): void {
            if (age > 0) {
                this.age = age;
            } else {
                throw new Error("Age must be positive");
            }
        }

        public getSalary(): number {
            return this.salary;
        }

        public setSalary(salary: number): void {
            if (salary >= 0) {
                this.salary = salary;
            } else {
                throw new Error("Salary must be non-negative");
            }
        }

        public getDescription(): string {
            return this.description;
        }

        public setDescription(description: string): void {
            this.description = description;
        }

        public increaseSalary(percent: number): void {
            if (percent > 0) {
                this.salary += (this.salary * percent) / 100;
            } else {
                throw new Error("Percentage must be positive");
            }
        }

        public getSummary(): string {
            return `User ${this.name}, Age: ${this.age}, Salary: $${this.salary}, Description: ${this.description}`;
        }
    }
}
