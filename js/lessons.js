function jQuery(selector, context = document){
    this.elements = Array.from(context.querySelectorAll(selector));
    return this
}

jQuery.prototype.each = function (fn){
    this.elements.forEach((element, index) => fn.call(element, element, index));
    return this;
}

jQuery.prototype.click = function(fn){
    this.each(element => element.addEventListener('click', fn))
    return this
}

jQuery.prototype.hide = function(){
    this.each(element => element.style.display = 'none')
  return this;
}

jQuery.prototype.show = function(){
    this.each(element => element.style.display = '')
  return this;
}

jQuery.prototype.remove = function(){
    this.each(element => element.remove())
  return this;
}

jQuery.prototype.class = function(name){
    this.each(element => element.className = name)
  return this;
}
//------------------------ЗАДАНИЕ №1
//функция для получения или замены html-содержимого элемента
jQuery.prototype.html = function(html){
    let htm_ = new Set();//на случай, если это группа элементов, 
                         //выбираем уникальные строки innerHTML чтобы потом вернуть строкой через \n
    this.each(element => {
        if (html==undefined){ //если аргумент пустой(отстутсвует) кидаем значение html в множество, исключая дубли
            htm_.add(element.innerHTML)                
        }else { //в противном случае, присваиваем атрибуту innerHTML значение аргумента
            element.innerHTML = html
        }
    });
    return [...htm_].join('\n') //возвращаем строку склееную через \n из элементов массива полученного из множества
}

//------------------------ЗАДАНИЕ №2
//функция для получения или замены text-содержимого элемента, в отличие от задания 2
//оператор ветвления реализован вне стрелочной функции, а значит ветвление будет выполнено ровно один раз
//а не для каждого элемента списка как в первом задании
jQuery.prototype.text = function(text){
    let text_ = new Set();//на случай, если это группа элементов, 
                         //выбираем уникальные строки innerText и возвращаем строкой через \n
    if (text==undefined){ //если аргумент пустой(отстутсвует) кидаем значение innerText в множество, исключая дубли
        this.each(element => text_.add(element.innerText))
    }else { //в противном случае, присваиваем атрибуту innerText значение аргумента
        this.each(element => element.innerText = text)
    }
    return [...text_].join('\n') //возвращаем строку склееную через \n из элементов массива полученного из множества
}

const $ = (e) => new jQuery(e);

//$('button').hide().show().click(e => console.log(e)).class('name')

