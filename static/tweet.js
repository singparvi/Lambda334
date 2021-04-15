// $('#author_text_input').value = "Please enter a twitter user's handle";
// $('#author_submit').click(function () {
//     $.ajax({
//         url: '/add_user?twitter_handle=' + $('#author_text_input').val(),
//         type: 'GET',
//     });
// });
// $('#tweet_text_input').value = "Please enter a tweet to classify";
// $('#tweet_submit').click(function () {
//     $.ajax({
//         url: '/add_user?twitter_handle=' + $('#tweet_text_input').val(),
//         type: 'GET',
//         success: function () {
//             $('#tweet_text_input').innerText = <response.text>;</response.text>
//         }
//     });
// });

$('#author_submit').click(function () {
    $.ajax({
        url: '/add_user?twitter_handle=' + $('#author_name_input').val(),
        type: 'GET',
    });
});
$('#tweet_submit').click(function () {
    $.ajax({
        url: '/predict_author?tweet_to_classify=' + $('#tweet_text_input').val(),
        type: 'GET',
        success: function(response) {
            $('#prediction_text').html(response);
        }
    });
});
$('#link').ready(function()    {
    $(document).on("click", ".link", function() {
        $(this).attr("href", "http://example.com/page1-clicked/");
    });
});
//callback. HTTP request from backend and wait for the response. And when the info comes run this.