<table class="table table-bordered">
	<tbody>
	<%for(var i in list){%>
	    <tr>
	        <td><%=list[i].name%></td>
	        <td><%=list[i].school%></td>
	    </tr>       
	<%}%>
	</tbody>
</table>
