function main() {
    const table = document.querySelector('table');
    if (table) {
        var data = {}
        var tbl = document.getElementsByTagName("table").item(0);
        // 行に対するループ
        var rows = tbl.rows;
        for (var i = 0, len = rows.length; i < len; i++) {
            var cols = rows[i].cells.length;
            // 列に対するループ
            console.log(rows[i].cells[3].innerText);
            if (rows[i].cells[3].innerText === "IE2(情報)") {

                for (var j = 0; j < cols; j++) {
                    rows[i].cells[j].style.backgroundColor = "orange";
                }
            }else{
                for (var j = 0; j < cols; j++) {
                    rows[i].cells[j].innerText = "";
                }
            }
        }
        // テーブルをHTML文字列に変換
        const tableHTML = table.outerHTML;
        var tbl = document.getElementsByTagName("table").item(0);
        var rows = tbl.rows.length; // 行数

        // ポップアップに送信
        // console.log(tableHTML);
        console.log(rows);

        // document.getElementById('extract-table').innerHTML = tableHTML;
        // chrome.runtime.sendMessage({ table: tableHTML });
    } else {
        alert('No table found on this page.');
    }
}
main();