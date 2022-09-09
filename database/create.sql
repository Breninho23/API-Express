create schema post;

create table post.post (
    id serial primary key,
    receptionAttendance int not null,
    receptionTime int not null,
    receptionNote text,
    collectAttendante int not null,
    collectTime int not null,
    collectNote text,
    physiotherapyAttendance int not null,
    physiotherapyTime int not null,
    physiotherapyNote text
)