jQuery(document).ready(function() {
  jQuery("#retrieve-resources").click(function() {
    var displayResources = jQuery(".top-list-links");

    displayResources.text("Loading data from JSON source...");

    jQuery.ajax({
      type: "GET",
      url: "/Assets/urls.json", // Using our resources.json file to serve results
      success: function(result) {
        console.log(result);
        var output =
          "<table><tbody>";
        for (var i in result) {
          output +=
            "<tr><td>" +
            result[i].shortUrl +
            "</td><td>" +
            result[i].hits +
            "</td></tr>";
        }
        output += "</tbody></table>";

        displayResources.html(output);
        jQuery("table").addClass("table");
      }
    });
  });
});
