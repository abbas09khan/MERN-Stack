const student={
    name: "areeba",
    email: "areebakhan@gmail.com",
    passoword : "abbas",
    mobile: 6743674678,
}

    console.log(student.name)
    console.log(student["passoword"])
    //replace
    student.password="areeba";
    student.address="lucknow";
    console.log(student)


    const smartphones={
        "brand": " apple",
        "model":"iphone 15",
        "price":30000,
        "color": ["red","blue","orange"],
    };
    smartphones.color[1]="skyblue";
    console.log(smartphones)