function NewClient() {
  return (
    <>
      <h1 className="font-semibold uppercase text-xl mb-2">CLIENT INFOS</h1>
      <form className="space-y-5 ">
        <div>
          <label className="mb-2 inline-block">Company</label>
          <input className="py-1 px-2.5 w-full" />
        </div>
        <div>
          <label className="mb-2 inline-block">Client Name</label>
          <input className="py-1 px-2.5 w-full" />
        </div>
        <div>
          <label className="mb-2 inline-block">Address</label>
          <input className="py-1 px-2.5 w-full" />
        </div>
        <div className="space-y-5">
          <div>
            <label className="mb-2 inline-block">Number Phone</label>
            <input type="date" className="py-1 px-2.5 w-full" />
          </div>
          <div>
            <label className="mb-2 inline-block">E-mail</label>
            <input type="mail" className="py-1 px-2.5 w-full" />
          </div>
        </div>
        <div>
          <label>Additional Notes</label>
          <textarea></textarea>
        </div>
        <div className="text-right">
          <button className="py-2 px-5 bg-violet-600 text-violet-50 font-semibold">NEXT</button>
        </div>
      </form>
    </>
  );
}

export default NewClient;
