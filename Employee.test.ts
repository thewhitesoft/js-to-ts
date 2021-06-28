import Employee from "./Employee";

describe("hello", () => {
    it("green", () => {
        // Arrange
        let employee = new Employee("a", 'b');

        // Act & Assert
        expect(employee.hello('Alex')).toBe('Hi, mr. Alex. I\'m a b');
    })
});
