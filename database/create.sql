create schema post;

create table post.post (
    id serial primary key,
    codType int,
    receptionAttendance int,
    receptionTime int,
    receptionNote text,
    collectAttendante int,
    collectTime int,
    collectNote text,
    physiotherapyAttendance int,
    physiotherapyTime int,
    physiotherapyNote text,
    contact text,
    suggestion text,
    message text
)