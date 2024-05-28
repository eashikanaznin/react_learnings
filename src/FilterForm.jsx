export function FilterForm({ hideUnchecked }){
  return (
   
      <div className="filter-form">
        <div className="filter-form-group">
          <label htmlfor="name">Name</label>
          <input type="text" id="name" value="" />
        </div>
        <label>
          <input type="checkbox" onClick = {(e) => hideUnchecked(e.target.checked)} />
          Hide Completed
        </label>
      </div>

  )
}