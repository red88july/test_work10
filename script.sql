create table news
(
    id       int auto_increment
        primary key,
    title    text                     not null,
    content  text                     not null,
    image    varchar(255)             null,
    datetime datetime default (now()) not null
);

create table comments
(
    id      int auto_increment
        primary key,
    news_id int  not null,
    author  text null,
    comment text not null,
    constraint comments_news__fk
        foreign key (news_id) references news (id)
);


