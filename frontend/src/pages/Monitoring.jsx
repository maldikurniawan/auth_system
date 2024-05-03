import React from 'react'

const Monitoring = () => {
  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Monitoring Cache Server PT Queen Network Nusantara</strong>
      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead>
            <tr>
              <th className='border border-slate-300'>No</th>
              <th className='border border-slate-300'>Name Klien</th>
              <th className='border border-slate-300'>URL</th>
              <th className='border border-slate-300'>Waktu Kunjungan</th>
              <th className='border border-slate-300'>Status</th>
              <th className='border border-slate-300'>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-slate-300'>1</td>
              <td className='border border-slate-300'>-</td>
              <td className='border border-slate-300'>-</td>
              <td className='border border-slate-300'>-</td>
              <td className='border border-slate-300'>-</td>
              <td className='border border-slate-300'>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div >
  )
}

export default Monitoring