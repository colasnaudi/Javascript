/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
/*                                    To-Do                                   */
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

function addTask() {
    const div = document.createElement('div');
    let text = document.getElementById("task").value;
    if (text.length > 38) {
        text = text.substring(0, 38) + "<br>" + text.substring(38, text.length);
    }
        div.className = 'row';

        div.innerHTML = "<label class='taskText'>"
        + text
        + "</label><input type='button' class='removeBtn' value='-' onclick='removeRow(this)' /><br>"
        + "<style>.list {margin: 0 35%;padding: 5px 15px;border: solid 2px rgb(132, 25, 240);border-radius: 5px;}</style>";

        document.getElementById('list').appendChild(div);
}

function removeRow(input) {
    document.getElementById('list').removeChild(input.parentNode);
}