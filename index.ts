import Employee from "./Employee";

function main(args) {
    let employee = new Employee("Last", 'First');

    console.log(employee.hello(args[0]));
}

if (require.main === module) {
    main(process.argv.slice(2));
}