var age = 65;
var isMale = false;
var result = '判定中';



document.write(age + '歳は、');

if(age >= 60 && isMale === false) {
    result = '割引対象です。';
} else{
    result = '割引対象ではありません。';
}
document.write(result);
