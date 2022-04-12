import React, { useState } from 'react';

const DisplayMusic = (props) => {
    return ( 
        <div>
           <table>
               <thead>
                   <tr>
                       <th>Title</th>
                       <th>Artist</th>
                       <th>Album</th>
                       <th>Genre</th>
                       <th>Release Date</th>
                   </tr>
               </thead>
               <tbody>
                   {props.songs.map((song) => {
                       return (
                           <tr>
                             <td>{song.title}</td>  
                             <td>{song.artist}</td>  
                             <td>{song.album}</td>  
                             <td>{song.genre}</td>  
                             <td>{song.release_date}</td>  
                           </tr>
                       )
                   })}
               </tbody>
           </table>
        </div>
     );
}
 
export default DisplayMusic;