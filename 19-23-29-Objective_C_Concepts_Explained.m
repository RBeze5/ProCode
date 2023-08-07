#import <Foundation/Foundation.h>

// Sample class declaration
@interface Person : NSObject

// Properties
@property (nonatomic, strong) NSString *name;
@property (nonatomic, assign) NSInteger age;

// Method declaration
- (void)introduce;

@end

// Class implementation
@implementation Person

// Method definition
- (void)introduce {
    NSLog(@"Hello, my name is %@ and I am %ld years old.", self.name, (long)self.age);
}

@end

int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // Object creation
        Person *person = [[Person alloc] init];
        
        // Property assignment
        person.name = @"John";
        person.age = 25;
        
        // Method invocation
        [person introduce];
    }
    return 0;
}