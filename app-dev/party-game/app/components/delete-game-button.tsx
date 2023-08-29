/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use client';

import useFirebaseAuthentication from '@/app/hooks/use-firebase-authentication';
import {deleteGameAction} from '../actions/delete-game';

export default function DeleteGameButton({gameId}: { gameId: string }) {
  const authUser = useFirebaseAuthentication();

  const onDeleteGameClick = async () => {
    const token = await authUser.getIdToken();
    await deleteGameAction({gameId, token});
  };

  return (
    <div>
      <button onClick={onDeleteGameClick} className={`m-2 mt-20 p-2 text-gray-700 hover:underline hover:decoration-[var(--google-cloud-red)] hover:text-black block rounded-md px-3 py-2 text-base font-medium`}>Delete Game</button>
    </div>
  );
}