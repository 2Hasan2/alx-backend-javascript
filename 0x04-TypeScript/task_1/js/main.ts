export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [index: string]: unknown;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}
interface InStudentClass {
  workOnHomework(): string;
  displayName(): string;
}
export interface InStudentClassConstructor {
  new (firstName: string, lastName: string): InStudentClass;
}

class StudentClass implements InStudentClass {
  private firstName!: string;
  private lastName!: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
export function createStudent(Ctor: InStudentClassConstructor, firstName: string, lastName: string): IStudentClass {
  return new Ctor(firstName, lastName);
}
